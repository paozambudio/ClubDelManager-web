/* import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  pub_date: string;
  image: string | null;
  category: string;
}

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export default function Noticias() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/news/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching news: ' + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Cargando noticias...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Últimas Noticias</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map(item => (
          <Card key={item.id} className="overflow-hidden">
            {item.image && (
              <img 
                src={`data:image/jpeg;base64,${item.image}`} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
            )}
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">
                Por {item.author} | {new Date(item.pub_date).toLocaleDateString()}
              </p>
              <p className="text-sm">{item.content.substring(0, 150)}...</p>
              <p className="text-xs mt-2 text-blue-600">{item.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} */
