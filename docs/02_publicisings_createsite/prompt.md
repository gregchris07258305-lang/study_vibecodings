## 프롬포트 
JSON의 content_data를 활용해서 자바스크립트 playlists 배열을 만들고, 카드를 동적으로 생성하는 코드를 작성해줘. 각 카드 클릭 시 모달에 해당 데이터가 바인딩되어야 해
```python
{
  "meta": {
    "role": "Senior Frontend Developer",
    "project": "Ungreged Jazz Omakase Website",
    "task": "Implement UI with specific content data",
    "tech_stack": "HTML5, Bootstrap 5, Vanilla JS"
  },
  "design_context": {
    "theme": "Sophisticated Wood & White Cafe",
    "atmosphere": "Cozy, Minimalist, Tech-savvy",
    "primary_color": "#5d4037 (Deep Wood)",
    "background_color": "#fdfcfb (Off-white Wall)"
  },
  "content_data": {
    "brand_name": "Ungreged Jazz Omakase",
    "links": {
      "youtube_base": "https://www.youtube.com/@Ungreged",
      "blog_base": "https://blog.naver.com/gregchris"
    },
    "playlist_items": [
      {
        "id": "01_ramen_intense",
        "title": "라멘집에서 들으면 체하는, 재즈 오마카세",
        "description": "후끈 달아오르는 재즈입니다. 강렬한 비밥의 열기를 느껴보세요.",
        "image_ref": "list_thumb_01_ramen.jpg",
        "mood": "Intense, Hot, Hard-bop"
      },
      {
        "id": "02_shop_chic",
        "title": "세련된 그 가게, 재즈 오마카세",
        "description": "사장님 선곡이 미쳤어요. 공간의 감도를 높여주는 세련된 트랙.",
        "image_ref": "list_thumb_02_shop.jpg",
        "mood": "Sophisticated, Modern, Lounge"
      },
      {
        "id": "03_rainy_drums",
        "title": "차작이는 비가 오면, 재즈 오마카세",
        "description": "잘게 쪼개진 드럼소리가 좋아요. 빗소리와 섞이는 브러쉬 스틱의 질감.",
        "image_ref": "list_thumb_03_rain.jpg",
        "mood": "Rainy, Sentimental, Drum-focused"
      },
      {
        "id": "04_morning_start",
        "title": "하루의 시작은, 재즈 오마카세",
        "description": "잔잔한 흥을 즐겨보세요. 기분 좋은 하루를 여는 경쾌한 리듬.",
        "image_ref": "list_thumb_04_morning.jpg",
        "mood": "Morning, Upbeat, Breeze"
      },
      {
        "id": "05_chilly_udon",
        "title": "쌀쌀하니, 재즈 오마카세",
        "description": "우동 대신에 즐겨보세요. 차가운 공기를 데워주는 따뜻한 선율.",
        "image_ref": "list_thumb_05_chilly.jpg",
        "mood": "Winter, Warm, Comfort"
      }
    ]
  },
  "implementation_requirements": {
    "javascript_logic": "Create a 'playlists' const array containing the data above. Render cards dynamically using map/forEach.",
    "image_handling": "Use placeholder services (placehold.co) initially but map the 'src' to './assets/images/thumbnails/[image_ref]'.",
    "ui_interaction": "Clicking a card opens a modal (The Big Picture style) showing the title, full description, and buttons linking to YouTube/Blog."
  }
}
```