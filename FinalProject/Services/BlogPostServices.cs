using CoderCamps;
using FinalProject.DCSite.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Services
{
    public class BlogPostService : IBlogPostService
    {
        private IGenericRepository _repo;

        public BlogPostService(IGenericRepository repo) {
            this._repo = repo;
        }

        public IList<BlogPost> ListBlogs() {
            return _repo.Query<BlogPost>().ToList();
        }

        public void AddBlog(BlogPost blogPost) {
            _repo.Add(blogPost);
            _repo.SaveChanges();
        }
        public void EditBlogPost(BlogPost blogPost) {
            var original = _repo.Find<BlogPost>(blogPost.Id);
            original.Title = blogPost.Title;
            original.Source = blogPost.Source;
            original.PostingDate = blogPost.PostingDate;
            original.ArticleContent = blogPost.ArticleContent;
            _repo.SaveChanges();
        }
        public void DeleteBlogPost(int id) {
            _repo.Delete<BlogPost>(id);
            _repo.SaveChanges();
        }
        public BlogPost GetBlogPost(int id) {
            return _repo.Find<BlogPost>(id);
        }
    }
}
