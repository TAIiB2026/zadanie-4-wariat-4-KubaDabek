namespace WebAPI.Models
{
    public class Gra
    {
        public int Id { get; set; }
        public string Tytul { get; set; } = string.Empty;
        public decimal Cena { get; set; }
        public DateTime DataPremiery { get; set; }
    }
}