using System;
namespace exception_handling
{
    public class ExceptionsHandling
    {  
        static void Run()
        {
           Console.WriteLine("Enter numbers. Input will stop when a non-numeric or overflowing value is entered.");
        
        for (int i = 0; ; i++)
            {
            Console.Write($"Enter number {i + 1}: ");

                    try
                    {
                        int number = Convert.ToInt32(Console.ReadLine());
                        Console.WriteLine($"You entered: {number}");
                    }
                    catch (FormatException)
                    {
                        Console.WriteLine("Invalid input. Not a number. Exiting...");
                        break;
                    }
                    catch (OverflowException)
                    {
                        Console.WriteLine("Number too large or too small. Exiting...");
                        break;
                    }
                }
            }
        }
    }


