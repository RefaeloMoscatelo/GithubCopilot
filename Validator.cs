using System.Text.RegularExpressions;

public class Validator
{
    // Validate email address using regex
    public static bool ValidateEmail(string email)
    {
      try
      {
        if (string.IsNullOrWhiteSpace(email))
          return false;
          
        var pattern = @"^[^\s@]+@[^\s@]+\.[^\s@]+$";
        return Regex.IsMatch(email, pattern, RegexOptions.IgnoreCase);
      }
      catch
      {
        return false;
      }
    }

    // Validate ID number (9-digit number)
    public static bool ValidateID(string id)
    {
        if (string.IsNullOrWhiteSpace(id))
            return false;
            
        var pattern = @"^\d{9}$";
        return Regex.IsMatch(id, pattern);
    }
}
