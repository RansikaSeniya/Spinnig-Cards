// Add interactive effects
        const cards = document.querySelectorAll('.card');
        
        cards.forEach((card, index) => {
            // Add random spin speeds
            const cardInner = card.querySelector('.card-inner');
            const randomSpeed = 6 + Math.random() * 4; // Between 6-10 seconds
            cardInner.style.animationDuration = `${randomSpeed}s`;
            
            // Add random delay
            const randomDelay = Math.random() * 2;
            cardInner.style.animationDelay = `${randomDelay}s`;
            
            // Add mouse interaction
            card.addEventListener('mouseenter', () => {
                cardInner.style.animationPlayState = 'paused';
                card.style.transform = 'scale(1.05)';
                card.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                cardInner.style.animationPlayState = 'running';
                card.style.transform = 'scale(1)';
            });
            
            // Add click interaction
            card.addEventListener('click', () => {
                cardInner.style.animation = 'none';
                cardInner.style.transform = 'rotateY(180deg)';
                
                setTimeout(() => {
                    cardInner.style.animation = `spin ${randomSpeed}s linear infinite`;
                    cardInner.style.animationDelay = '0s';
                }, 800);
            });
        });

        // Add floating shapes animation
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            const randomSize = 60 + Math.random() * 80;
            shape.style.width = `${randomSize}px`;
            shape.style.height = `${randomSize}px`;
            
            const randomDuration = 4 + Math.random() * 4;
            shape.style.animationDuration = `${randomDuration}s`;
        });

        // Add parallax effect to title
        window.addEventListener('mousemove', (e) => {
            const title = document.querySelector('.title');
            const x = (e.clientX / window.innerWidth) * 20 - 10;
            const y = (e.clientY / window.innerHeight) * 20 - 10;
            title.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
        });