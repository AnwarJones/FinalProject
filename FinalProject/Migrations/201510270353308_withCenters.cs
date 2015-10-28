namespace FinalProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class withCenters : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DaycareCenters",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CenterName = c.String(nullable: false),
                        CenterAddress_StreetAddress = c.String(nullable: false),
                        CenterAddress_City = c.String(nullable: false),
                        CenterAddress_State = c.String(nullable: false),
                        CenterAddress_ZipCode = c.String(nullable: false),
                        TelephoneNumber = c.String(nullable: false),
                        Email = c.String(),
                        ContactPerson = c.String(nullable: false),
                        Website = c.String(),
                        TotalCapacity = c.Int(nullable: false),
                        NumberOfOpenings = c.Int(nullable: false),
                        WaitingListSize = c.Int(nullable: false),
                        WaitingListOpenings = c.Boolean(nullable: false),
                        ReligiousAffiliation = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DaycareCenters");
        }
    }
}
