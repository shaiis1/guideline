using System;
namespace hashavim_interview_api.Requests
{
	public class SendMessageReq
	{
		public int workerId { get; set;}
        public string? message { get; set; }
    }
}

