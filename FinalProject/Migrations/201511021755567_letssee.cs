namespace FinalProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class letssee : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.DaycareCenters", "CenterAddress_FormattedAddress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.DaycareCenters", "CenterAddress_FormattedAddress", c => c.String());
        }
    }
}
