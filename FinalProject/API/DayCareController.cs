using FinalProject.DCSite.Classes;
using FinalProject.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinalProject.API
{
    public class DaycareController : ApiController
    {
        private IDayCareService _daycareService;

        public DaycareController(IDayCareService daycareService)
        {
            this._daycareService = daycareService;
        }
        public IEnumerable<DaycareCenter> Get()
        {
            return _daycareService.ListCenters();
        }

        [HttpGet]
        [Route("api/Daycare/filter/{type}")]
        public IEnumerable<DaycareCenter> Filter(DaycareCenter.BizTypes type)
        {
            return _daycareService.FilterCenters(type);
            
        }

        public IHttpActionResult Get(int id)
        {
            var center = _daycareService.GetCenter(id);
            if (center == null)
            {
                return NotFound();
            }
            return Ok(center);
        }


        public IHttpActionResult Post(DaycareCenter center)
        {
            if (center == null)
            {
                return BadRequest("Missing Daycare Center Post");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (center.Id == 0)
            {
                _daycareService.AddCenter(center);
                return Created("/Centers" + center.Id, center);
            }
            else
            {
                _daycareService.EditCenter(center);
                return Ok(center);
            }
        }
        public IHttpActionResult Delete(int id)
        {
            var original = _daycareService.GetCenter(id);
            if (original == null)
            {
                return NotFound();
            }
            _daycareService.DeleteCenter(id);
            return Ok();
        }
    }

}
