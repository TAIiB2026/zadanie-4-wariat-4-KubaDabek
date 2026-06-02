using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GryController : ControllerBase
    {
        private readonly RepozytoriumPamiecioweService _serwis;

        public GryController(RepozytoriumPamiecioweService serwis)
        {
            _serwis = serwis;
        }

        //GET(strona+filtr)
        [HttpGet]
        public ActionResult<List<Gra>> Get(
            [FromQuery] int strona = 1,
            [FromQuery] int rozmiarStrony = 10,
            [FromQuery] string? tytul = null)
        {
            var dane = _serwis.Get();

            if (!string.IsNullOrWhiteSpace(tytul))
                dane = dane.Where(g => g.Tytul.Contains(tytul, StringComparison.OrdinalIgnoreCase)).ToList();

            dane = dane.Skip((strona - 1) * rozmiarStrony).Take(rozmiarStrony).ToList();

            return Ok(dane);
        }

        //GET(ID)
        [HttpGet("{id}")]
        public ActionResult<Gra> GetById(int id)
        {
            var gra = _serwis.GetById(id);
            if (gra == null) return NotFound();
            return Ok(gra);
        }

        //POST
        [HttpPost]
        public ActionResult<bool> Post([FromBody] Gra gra)
        {
            var wynik = _serwis.Post(gra.Tytul, gra.Cena, gra.DataPremiery);
            return Ok(wynik);
        }

        //PUT
        [HttpPut("{id}")]
        public ActionResult<bool> Put(int id, [FromBody] Gra gra)
        {
            var wynik = _serwis.Put(id, gra.Tytul, gra.Cena, gra.DataPremiery);
            if (!wynik) return NotFound();
            return Ok(wynik);
        }

        //DELETE
        [HttpDelete("{id}")]
        public ActionResult<bool> Delete(int id)
        {
            var wynik = _serwis.Delete(id);
            if (!wynik) return NotFound();
            return Ok(wynik);
        }
    }
}
