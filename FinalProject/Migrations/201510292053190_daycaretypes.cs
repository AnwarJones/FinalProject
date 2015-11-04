namespace FinalProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class daycaretypes : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DaycareCenters", "CenterType", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.DaycareCenters", "CenterType");
        }
    }
}
