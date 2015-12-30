namespace FinalProject.Migrations
{
    using DCSite.Classes;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;

    internal sealed class Configuration : DbMigrationsConfiguration<FinalProject.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FinalProject.Models.ApplicationDbContext context)
        {
            var Blogs = new BlogPost[]
                {
                    new BlogPost {Id=1,  Title = "Choosing the Best Care", Source = "GoodParents.Com", PostingDate = new DateTime(2015, 7,15), ArticleContent = "Bacon ipsum dolor amet jowl spare ribs tail short ribs. Kevin turkey tongue t-bone landjaeger shankle sirloin kielbasa. Pork sirloin hamburger ham, alcatra jowl ball tip cupim salami andouille pastrami. Fatback ball tip doner beef kielbasa ham hock sausage pig. Beef ribs meatball shoulder, flank cupim rump shank jerky hamburger." },
                    new BlogPost {Id=2, Title = "Best Questions to Ask During Child Care Interviews", Source = "Working Parents", PostingDate = new DateTime(2015, 9, 25), ArticleContent = "Bacon ipsum dolor amet ullamco capicola rump biltong ham incididunt. Beef ribs pork belly pork tongue. Shoulder excepteur aute pork incididunt ut, jowl aliquip labore nostrud. Id non meatball ut. Strip steak occaecat quis pastrami landjaeger pig." },
                    new BlogPost { Id=3, Title = "How to Help Your 2 Year Old With Homework!?!?", Source = "Anwar Jones", PostingDate = new DateTime(2014, 4, 2), ArticleContent = "Bacon ipsum dolor amet leberkas kielbasa bacon turkey officia sausage kevin laborum sunt. Aute prosciutto turducken short loin anim enim ribeye ham hock nulla picanha, laborum irure. Biltong doner exercitation frankfurter porchetta. Nostrud ut minim meatball pariatur pork chop short loin consequat filet mignon. Cow laborum landjaeger salami non bresaola mollit tongue dolor pig id. Chuck drumstick filet mignon laborum meatloaf, occaecat tri-tip minim enim ball tip. Irure filet mignon fugiat bacon picanha, bresaola pork belly pork chop beef ribs proident velit dolor pancetta exercitation. Laborum cillum beef turducken shankle doner in. Qui excepteur tempor dolore rump pork chop. Pork loin tongue proident ullamco ut excepteur ham hock pastrami. Shank pork loin non short loin ipsum." }
                };
            context.Blogs.AddOrUpdate(b => b.Title, Blogs);
        

            var Centers = new DaycareCenter[]
                {
                    new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345", Latitude="33.901410", Longitude="-84.466034"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.BizTypes.StandAlone  },
                    new DaycareCenter {Id=1, CenterName="Dresden Drive KinderCare", CenterAddress=new Address {StreetAddress="2459 Dresden Drive NE", City="Chamblee", State="GA", ZipCode="30341", Latitude="33.869633", Longitude="-84.291298"}, TelephoneNumber = "404-555-9878", Email = "Info@kindercare-dresden.com", ContactPerson="Tabitha Collins", Website = "www.kindercare.com/our-centers/chamblee/ga/300412", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=10, WaitingListOpenings = false, ReligiousAffiliation =false, CenterType = DaycareCenter.BizTypes.Chain },
                    new DaycareCenter {Id=1, CenterName="Child Time of Stone Mountain", CenterAddress=new Address {StreetAddress="501 Ridge Avenue", City="Stone Mountain", State="GA", ZipCode="30083", Latitude="33.790861", Longitude="-84.171249"}, TelephoneNumber = "844-555-1328", Email = "director@childtime.com", ContactPerson="Rachel Hollister", Website = "www.childtime.com/your-local-school/stone-mountain-ga-1101/", TotalCapacity=150, NumberOfOpenings=14, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =false, CenterType = DaycareCenter.BizTypes.Chain },
                    new DaycareCenter {Id=1, CenterName="Kompany Kids", CenterAddress=new Address {StreetAddress="296 Interstate North #156", City="Atlanta", State="GA", ZipCode="30339", Latitude="33.894836", Longitude="-84.459066"}, TelephoneNumber = "770-555-1387", Email = "atlantacenter@kompanykids.com", ContactPerson="William Bell", Website = "www.KompanyKids.com", TotalCapacity=100, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =false, CenterType = DaycareCenter.BizTypes.StandAlone },
                   /* new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.types.StandAlone },
                    new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.types.StandAlone },
                    new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.types.StandAlone },
                    new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.types.StandAlone },
                    new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.types.StandAlone },
                    new DaycareCenter {Id=1, CenterName="Genesis of Learning", CenterAddress=new Address {StreetAddress="1225 N. Hollinsworth", City="Atlanta", State="GA", ZipCode="30345"}, TelephoneNumber = "404-555-1328", Email = "Info@genesislearning.com", ContactPerson="Jennifer Tilling", Website = "www.GenesisCare.com", TotalCapacity=125, NumberOfOpenings=0, WaitingListSize=15, WaitingListOpenings = true, ReligiousAffiliation =true, CenterType = DaycareCenter.types.StandAlone },*/
                    new DaycareCenter {Id=1, CenterName="Sky is the Limit", CenterAddress=new Address {StreetAddress="15101 Skyline Lane", City="Atlanta", State="GA", ZipCode="30345", Latitude="33.853823", Longitude="-84.299870"}, TelephoneNumber = "404-555-9233", Email = "Info@skysthelimit.com", ContactPerson="Tracy Mcafee", Website = "www.skysthelimit", TotalCapacity=25, NumberOfOpenings=3, WaitingListSize=5, WaitingListOpenings = true, ReligiousAffiliation =false, CenterType = DaycareCenter.BizTypes.HomeBase }

                };
            context.Centers.AddOrUpdate(c => c.CenterName, Centers);
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);
            //Ensure Anwar
            var user = userManager.FindByName("anwar.jones@gmail.com");
            if (user == null) {
                //Create user
                user = new ApplicationUser
                {
                    FirstName="Anwar",
                    LastName="Jones",
                    UserName = "anwar.jones@gmail.com",
                    Email = "anwar.jones@gmail.com"
                };
                userManager.Create(user, "SecretUserPass");

                userManager.AddClaim(user.Id, new Claim("CanEditDaycare", "true"));
                userManager.AddClaim(user.Id, new Claim("CanEditBlogs", "true"));
            }
        }


        

    }
}
