using System.Collections.Generic;
using FinalProject.DCSite.Classes;

namespace FinalProject.Services
{
    public interface IBlogPostService
    {
        void AddBlog(BlogPost blogPost);
        void DeleteBlogPost(int id);
        void EditBlogPost(BlogPost blogPost);
        BlogPost GetBlogPost(int id);
        IList<BlogPost> ListBlogs();
    }
}