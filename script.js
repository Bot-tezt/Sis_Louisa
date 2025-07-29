// Initialize particles.js
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });

            // Theme toggle
            const themeToggle = document.getElementById('themeToggle');
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-mode');
                const icon = themeToggle.querySelector('i');
                if (document.body.classList.contains('light-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            });

            // Form submission to WhatsApp
            const form = document.getElementById('birthdayWishForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const message = document.getElementById('message').value;
                
                // Create WhatsApp message
                const whatsappMessage = `Happy Birthday Sis Louisa!%0A%0AFrom: ${encodeURIComponent(name)}%0A%0AMessage: ${encodeURIComponent(message)}`;
                
                // Open WhatsApp with the message
                window.open(`https://wa.me/237673805208?text=${whatsappMessage}`, '_blank');
                
                // Reset form
                form.reset();
            });

            // Auto-play audio with user interaction
            document.addEventListener('click', function() {
                const audio = document.getElementById('birthdayAudio');
                audio.play().catch(e => console.log('Audio play failed:', e));
            }, { once: true });

            // Smooth scrolling for navigation
            document.querySelectorAll('nav .nav-icons i').forEach(icon => {
                icon.addEventListener('click', function() {
                    const targetId = this.classList.contains('fa-home') ? 'timeline' :
                                    this.classList.contains('fa-images') ? 'memories' :
                                    this.classList.contains('fa-gift') ? 'wish' :
                                    this.classList.contains('fa-info-circle') ? 'about' : '';
                    
                    if (targetId) {
                        document.getElementById(targetId).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
