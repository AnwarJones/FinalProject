namespace FinalProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ummm : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DaycareCenters", "CenterAddress_Geocodeaddress", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.DaycareCenters", "CenterAddress_Geocodeaddress");
        }
    }
}
