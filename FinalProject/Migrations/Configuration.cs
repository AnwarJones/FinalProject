namespace FinalProject.Migrations
{
    using DCSite.Classes;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FinalProject.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FinalProject.Models.ApplicationDbContext context)
        {
            var Blog = new BlogPost[]
                {
                    new BlogPost {Id=1,  Title = "Choosing the Best Care", Source = "GoodParents.Com", PostingDate = new DateTime(2015, 7,15), ArticleContent = "Bacon ipsum dolor amet jowl spare ribs tail short ribs. Kevin turkey tongue t-bone landjaeger shankle sirloin kielbasa. Pork sirloin hamburger ham, alcatra jowl ball tip cupim salami andouille pastrami. Fatback ball tip doner beef kielbasa ham hock sausage pig. Beef ribs meatball shoulder, flank cupim rump shank jerky hamburger." },
                    new BlogPost {Id=2, Title = "Best Questions to Ask During Child Care Interviews", Source = "Working Parents", PostingDate = new DateTime(2015, 9, 25), ArticleContent = "Bacon ipsum dolor amet ullamco capicola rump biltong ham incididunt. Beef ribs pork belly pork tongue. Shoulder excepteur aute pork incididunt ut, jowl aliquip labore nostrud. Id non meatball ut. Strip steak occaecat quis pastrami landjaeger pig." },
                    new BlogPost { Id=3, Title = "How to Help Your 2 Year Old With Homework!?!?", Source = "Anwar Jones", PostingDate = new DateTime(2014, 4, 2), ArticleContent = "Bacon ipsum dolor amet leberkas kielbasa bacon turkey officia sausage kevin laborum sunt. Aute prosciutto turducken short loin anim enim ribeye ham hock nulla picanha, laborum irure. Biltong doner exercitation frankfurter porchetta. Nostrud ut minim meatball pariatur pork chop short loin consequat filet mignon. Cow laborum landjaeger salami non bresaola mollit tongue dolor pig id. Chuck drumstick filet mignon laborum meatloaf, occaecat tri-tip minim enim ball tip. Irure filet mignon fugiat bacon picanha, bresaola pork belly pork chop beef ribs proident velit dolor pancetta exercitation. Laborum cillum beef turducken shankle doner in. Qui excepteur tempor dolore rump pork chop. Pork loin tongue proident ullamco ut excepteur ham hock pastrami. Shank pork loin non short loin ipsum." }
                };
            context.Blogs.AddOrUpdate(b => b.Title, Blog);
        }
    }
}
