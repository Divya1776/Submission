using System.Diagnostics;

namespace ConsoleApp1
{
    internal class Program
    {
        static Task <int> GetNumber(int n)
        {
            Thread.Sleep(30);
            return Task.FromResult(n*n);
        }
        static async Task Main(string[] args)
        {
       
            Console.WriteLine (GetNumber(10));
            Console.WriteLine ("Waiting");
            int d = await GetNumber(4);
            Console.WriteLine("Hello, World!" + d);
            Task.Delay (1000).Wait();           //same same output - preferred this one
            Console.WriteLine("Waking up");
            Thread.Sleep(1000);                   //same same output
            Console.WriteLine("Waking up");
            List<int> list = new List<int>();
        }
    }
}
