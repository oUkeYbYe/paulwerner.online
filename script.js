// Replace with your Supabase URL and anon key
const SUPABASE_URL = 'https://zqpggcvrofsvwcdqshjh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcGdnY3Zyb2ZzdndjZHFzaGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTAwNzgsImV4cCI6MjA3MDA4NjA3OH0.Le3pvGyOBMlo2Ti-Pk_Yc4qplDwo9ZtcdfEOKnPFf5s';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const grid = document.getElementById('grid');

async function loadImages() {
  const { data, error } = await supabase
    .from('photos')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    grid.innerHTML = '<p>Failed to load images</p>';
    return;
  }

  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = item.image_url;
    img.alt = item.caption;

    const caption = document.createElement('div');
    caption.classList.add('caption');
    caption.textContent = item.caption;

    div.appendChild(img);
    div.appendChild(caption);
    grid.appendChild(div);
  });
}

// Load images on page load
loadImages();
