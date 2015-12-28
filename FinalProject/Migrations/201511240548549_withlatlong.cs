namespace FinalProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class withlatlong : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DaycareCenters", "CenterAddress_longitude", c => c.String());
            AddColumn("dbo.DaycareCenters", "CenterAddress_latitude", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.DaycareCenters", "CenterAddress_latitude");
            DropColumn("dbo.DaycareCenters", "CenterAddress_longitude");
        }
    }
}
