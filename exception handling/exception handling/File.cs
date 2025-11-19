using System;


namespace exception_handling
{
    public class Files
    {
        static void Main()
        {
            try
            {
                using (StreamWriter writer = new StreamWriter("D:\\DL\\Training C# and .net\TVK\Program.cs")) ;

                writer.WriteLine("Line 1");
                writer.WriteLine("Line 2");
               
            }
        }

        {
            string path = @"g:\sample.txt";

            try
            {
                File.WriteAllText(path, "Hello, File Handling in c#!");
                Console.WriteLine("File created successfully.");
            }
            catch (UnauthorizedAccessException ex)
            {
                Console.WriteLine("Access denied to the path.");
                Console.WriteLine(ex.Message);
            }
            catch (DirectoryNotFoundException ex)
            {
                Console.WriteLine("Directory not found.");
                Console.WriteLine(ex.Message);
            }
            catch (IOException ex)
            {
                Console.WriteLine("IO error occurred.");
                Console.WriteLine(ex.Message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Unexpected error:");
                Console.WriteLine(ex.Message);
            }

        }
    }
}
