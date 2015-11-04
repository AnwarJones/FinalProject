using FinalProject.DCSite.Classes;
using FinalProject.Models;
using FinalProject.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinalProject.API
{
    public class BlogPostController : ApiController
    {
        private IBlogPostService _blogPostService;

        public BlogPostController(IBlogPostService blogPostService)
        {
            this._blogPostService = blogPostService;
        }
        public IEnumerable<BlogPost> Get()
        {
            return _blogPostService.ListBlogs();
        }

        public IHttpActionResult Get(int id)
        {
            var blogPost = _blogPostService.GetBlogPost(id);
            if (blogPost == null)
            {
                return NotFound();
            }
            return Ok(blogPost);
        }


        public IHttpActionResult Post(BlogPost blogPost)
        {
            if (blogPost == null)
            {
                return BadRequest("Missing Blog Post");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (blogPost.Id == 0)
            {
                _blogPostService.AddBlog(blogPost);
                return Created("/Blog" + blogPost.Id, blogPost);
            }
            else
            {
                _blogPostService.EditBlogPost(blogPost);
                return Ok(blogPost);
            }
        }
        public IHttpActionResult Delete(int id)
        {
            var original = _blogPostService.GetBlogPost(id);
            if (original == null)
            {
                return NotFound();
            }
            _blogPostService.DeleteBlogPost(id);
            return Ok();
        }
    }
}

