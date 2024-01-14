using System;
using Services.DataObjects;

namespace hashavim_interview_api.Models
{
	public class WorkerWithTypes
	{
		public Worker OriginalWorker { get; set; }
		public string GenderStr { get; set; }
        public string DepartmentStr { get; set; }
        public string WorkerTypeStr { get; set; }
        public WorkerWithTypes(Worker worker)
		{
			OriginalWorker = worker;
			GenderStr = Enum.GetName(typeof(Gender), worker.Gender);
            DepartmentStr = Enum.GetName(typeof(DepartmentType), worker.DepartmentType);
            WorkerTypeStr = Enum.GetName(typeof(WorkerType), worker.WorkerType);
        }
	}
}

