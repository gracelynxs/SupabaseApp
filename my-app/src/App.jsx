import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://btifkhoovdslyaliqptf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0aWZraG9vdmRzbHlhbGlxcHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MTE1MzAsImV4cCI6MjAxNDE4NzUzMH0.HGRHGtfzn_Ag9z8UkIGTWjr3NtmlhICCN0kXFVJ_hrM");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;