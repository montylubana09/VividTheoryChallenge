import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { Blogs } from "./entity/Blogs";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors())

// Connection with database 
const AppDataSource= new DataSource({
    type:"postgres",
    host: "vt-code-challenge.postgres.database.azure.com",
    port: 5432,
    username: "userchallenge@vt-code-challenge",
    password: "userchallenge",
    database: "challenge",
    entities: ["src/entity/*.ts"],
    ssl:true,
})
//Initialized connection
AppDataSource.initialize().then(()=>{
    console.log("Data source initialize success");
}).catch((err) => {
        console.error("Error during Data Source initialization:", err);
      });


      //Get call for the initial page with the pagination params
      app.get("/:page", async(req,res)=>
      {
        console.log(req.params.page);
         const blogs = await AppDataSource.manager
        .createQueryBuilder(Blogs, "blogs")
        .where('published_at IS NOT NULL')
         .skip(6*(parseInt(req.params.page)-1))
        .take(6)
        .orderBy("published_at","DESC")
        .getMany()
        
        //for pagecounts
        const blogcount= await AppDataSource.manager.createQueryBuilder(Blogs,"blogs")
        .where('published_at IS NOT NULL')
        .getCount()
        return res.json({blogcount,blogs});
        
        
      });
      //get request for specific blog
      app.get("/blog/:slug", async (req, res)=> {    
          const blog = await AppDataSource.manager
              .createQueryBuilder(Blogs, "blogs")
              .where("blogs.slug = :slug", {slug: req.params.slug })
              .getOne()
           return res.json(blog);
      });

//port for server where it will be listened
app.listen(5001);
console.log("server has started listening");