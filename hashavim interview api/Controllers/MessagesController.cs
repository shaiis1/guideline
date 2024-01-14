using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hashavim_interview_api.Requests;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace hashavim_interview_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessagesController : ControllerBase
    {
        private MessageService ms = new MessageService();
        private readonly ILogger<MessagesController> _logger;

        public MessagesController(ILogger<MessagesController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetMessages")]
        public IActionResult GetMessages([FromQuery] GetMessagesReq obj)
        {
            try
            {
                _logger.LogDebug($"***************** Start GetMessages ****************");
                System.Console.Write("Start GetMessages");
                var messagesList = ms.GetMessages(obj.workerId);
                _logger.LogDebug($"***************** Done GetMessages ****************");
                System.Console.WriteLine("Done GetMessages");
                return Ok(messagesList);
            }
            catch (Exception ex)
            {
                _logger.LogDebug($"GetMessages ERROR: {ex.Message}");
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("SendMessage")]
        public IActionResult SendMessage([FromBody] SendMessageReq obj)
        {
            try
            {
                _logger.LogDebug($"***************** Start SendMessage ****************");
                System.Console.Write("Start SendMessage");
                ms.SendMessage(obj.workerId, obj.message);
                _logger.LogDebug($"***************** Done SendMessage ****************");
                System.Console.WriteLine("Done SendMessage");
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogDebug($"SendMessage ERROR: {ex.Message}");
                return BadRequest(ex.Message);
            }
        }
    }
}

