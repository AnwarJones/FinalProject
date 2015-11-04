namespace FinalProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class oops : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DaycareCenters", "CenterAddress_FormattedAddress", c => c.String());
            DropColumn("dbo.DaycareCenters", "CenterAddress_Geocodeaddress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.DaycareCenters", "CenterAddress_Geocodeaddress", c => c.String());
            DropColumn("dbo.DaycareCenters", "CenterAddress_FormattedAddress");
        }
    }
}
