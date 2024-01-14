using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hashavim_interview_api.Models;
using Microsoft.AspNetCore.Mvc;
using Services;
using Services.DataObjects;

namespace hashavim_interview_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkersController : ControllerBase
    {
        private OrganizationService os = new OrganizationService();
        private readonly ILogger<WorkersController> _logger;

        public WorkersController(ILogger<WorkersController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetWorkers")]
        public IActionResult GetWorkers()
        {
            try
            {
                _logger.LogDebug($"***************** Start GetWorkers ****************");
                System.Console.Write("Start GetWorkers");
                var workersList = os.GetWorkerList();
                var enhanceWorkers = workersList.Select(worker => new WorkerWithTypes(worker));
                _logger.LogDebug($"***************** Done GetWorkers ****************");
                System.Console.WriteLine("Done GetWorkers");
                return Ok(enhanceWorkers);
            }
            catch(Exception ex)
            {
                _logger.LogDebug($"GetWorkers ERROR: {ex.Message}");
                return BadRequest(ex.Message);
            }
        }
    }
}

