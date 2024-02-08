using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace YourNamespace.Controllers
{
    [Route("api")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost("move")]
        public async Task<IActionResult> MoveFile(string sourcePath, string destinationPath)
        {
            try
            {

                // Check if the source file exists
                if (!System.IO.File.Exists(sourcePath))
                {
                    return NotFound("Source file not found.");
                }

                // Move the file to the destination path
                System.IO.File.Move(sourcePath, destinationPath);

                return Ok("File moved successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }

    public class MoveFileRequest
    {
        public string SourcePath { get; set; }
        public string DestinationPath { get; set; }
    }
}