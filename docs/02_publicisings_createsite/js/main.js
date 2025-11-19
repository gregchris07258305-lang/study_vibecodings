document.addEventListener('DOMContentLoaded', () => {

    const content_data = {
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
    };

    const playlists = content_data.playlist_items;
    const cardContainer = document.getElementById('playlist-cards');
    const playlistModal = new bootstrap.Modal(document.getElementById('playlistModal'));
    
    const modalTitle = document.getElementById('playlistModalLabel');
    const modalDescription = document.getElementById('modal-description');
    const modalYoutubeLink = document.getElementById('modal-youtube-link');
    const modalBlogLink = document.getElementById('modal-blog-link');

    // Render cards
    if (cardContainer) {
        cardContainer.innerHTML = playlists.map(item => `
            <div class="col">
                <div class="card h-100" data-id="${item.id}">
                    <img src="./assets/images/thumbnails/${item.image_ref}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description.substring(0, 50)}...</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Mood: <span class="badge">${item.mood}</span></small>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Handle card click
    cardContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            const playlistId = card.dataset.id;
            const selectedItem = playlists.find(p => p.id === playlistId);

            if (selectedItem) {
                modalTitle.textContent = selectedItem.title;
                modalDescription.textContent = selectedItem.description;
                modalYoutubeLink.href = content_data.links.youtube_base;
                modalBlogLink.href = content_data.links.blog_base;
                
                playlistModal.show();
            }
        }
    });
});
