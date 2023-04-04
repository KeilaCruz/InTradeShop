//Tener la conexion con la base de datos
const { createClient } = require('@supabase/supabase-js');

const url = 'https://btqlaqloldedvkvyhnzl.supabase.co';
const clave = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cWxhcWxvbGRlZHZrdnlobnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxNDc2MzQsImV4cCI6MTk5NTcyMzYzNH0.zMji4tY1iw8y-Cty-1IANLQBlGxQFLhPwijPKL6skZA'
const supabase = createClient(url,clave);

module.exports = supabase; 