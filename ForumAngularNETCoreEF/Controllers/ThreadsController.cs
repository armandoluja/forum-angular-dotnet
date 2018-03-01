using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ForumAngularNETCoreEF.Models;
using ForumEF;

namespace ForumAngularNETCoreEF.Controllers
{
    [Produces("application/json")]
    [Route("api/Threads")]
    public class ThreadsController : Controller
    {
        private readonly ForumContext _context;

        public ThreadsController(ForumContext context)
        {
            _context = context;
        }

        // GET: api/Threads
        [HttpGet]
        public IEnumerable<Thread> GetThread()
        {
            return _context.Thread;
        }

        // GET: api/Threads/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetThread([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var thread = await _context.Thread.SingleOrDefaultAsync(m => m.Id == id);

            if (thread == null)
            {
                return NotFound();
            }

            return Ok(thread);
        }

        // PUT: api/Threads/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThread([FromRoute] int id, [FromBody] Thread thread)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != thread.Id)
            {
                return BadRequest();
            }

            _context.Entry(thread).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Threads
        [HttpPost]
        public async Task<IActionResult> PostThread([FromBody] Thread thread)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Thread.Add(thread);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetThread", new { id = thread.Id }, thread);
        }

        // DELETE: api/Threads/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteThread([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var thread = await _context.Thread.SingleOrDefaultAsync(m => m.Id == id);
            if (thread == null)
            {
                return NotFound();
            }

            _context.Thread.Remove(thread);
            await _context.SaveChangesAsync();

            return Ok(thread);
        }

        private bool ThreadExists(int id)
        {
            return _context.Thread.Any(e => e.Id == id);
        }
    }
}