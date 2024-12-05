const conversations = [
    "สุขสันต์วันพ่อครับ",
    "โหยๆ ปีนี้ไม่ได้กลับบ้านเลย และก็เป็นปีแรกที่มีอะไรให้เหมือนกัน",
    "ก่อนอื่นตอบคำถามก่อน",
    "ให้กันทำหน้าที่พ่อได้ดี เสมอมา",
  ];
  
  const textElement = document.querySelector(".text");
  const nextButton = document.querySelector(".next");
  const btnContainer = document.querySelector(".btn-container");
  
  let currentIndex = 0;

  function typeText(text, element, callback) {
    let index = 0;
    element.textContent = "";
  
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 50);
  }
  
  nextButton.addEventListener("click", () => {
    if (currentIndex < conversations.length - 1) {
      // Disable the button to prevent multiple clicks
      nextButton.disabled = true;
  
      currentIndex++; // Increment BEFORE calling `typeText`
      typeText(conversations[currentIndex], textElement, () => {
        // Enable the button after text animation is complete
        nextButton.disabled = false;
  
        if (currentIndex === conversations.length - 1) {
          nextButton.remove();
          showYesNoButtons();
        }
      });
    }
  });
  
  // Show Yes and No buttons
  function showYesNoButtons() {
    const yesButton = document.createElement("button");
    yesButton.textContent = "พ่อเอง";
    yesButton.className = "next";
    yesButton.addEventListener("click", () => 
      {
        startFireworks()
        document.querySelector('.sup-container').style.display = "none";
        document.querySelector('.popup').style.display = "flex";
      }  
);
  
    const noButton = document.createElement("button");
    noButton.textContent = "พ่อมั่ง";
    noButton.className = "next";
    noButton.addEventListener("click", () => 
       {
        startFireworks()
        document.querySelector('.sup-container').style.display = "none";
        document.querySelector('.popup').style.display = "flex";
       } 
);
  
    btnContainer.appendChild(yesButton);
    btnContainer.appendChild(noButton);
  }
  

  typeText(conversations[currentIndex], textElement);



  function startFireworks() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let w, h, particles = [], probability = 0.04, xPoint, yPoint;

    canvas.style.display = 'block'

    function resizeCanvas() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function updateWorld() {
      update();
      paint();
      window.requestAnimationFrame(updateWorld);
    }

    function update() {
      if (particles.length < 500 && Math.random() < probability) {
        createFirework();
      }
      particles = particles.filter((p) => p.move());
    }

    function paint() {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      particles.forEach((p) => p.draw(ctx));
    }

    function createFirework() {
      xPoint = Math.random() * (w - 200) + 100;
      yPoint = Math.random() * (h - 200) + 100;
      const nFire = Math.random() * 50 + 100;
      const color = `rgb(${~~(Math.random() * 200 + 55)},${~~(Math.random() * 200 + 55)},${~~(Math.random() * 200 + 55)})`;

      for (let i = 0; i < nFire; i++) {
        const particle = new Particle();
        particle.color = color;
        const vy = Math.sqrt(25 - particle.vx * particle.vx);
        particle.vy = Math.abs(particle.vy) > vy ? (particle.vy > 0 ? vy : -vy) : particle.vy;
        particles.push(particle);
      }
    }

    function Particle() {
      this.w = this.h = Math.random() * 4 + 1;
      this.x = xPoint - this.w / 2;
      this.y = yPoint - this.h / 2;
      this.vx = (Math.random() - 0.5) * 10;
      this.vy = (Math.random() - 0.5) * 10;
      this.alpha = Math.random() * 0.5 + 0.5;
      this.gravity = 0.05;

      this.move = function () {
        this.x += this.vx;
        this.vy += this.gravity;
        this.y += this.vy;
        this.alpha -= 0.01;
        return this.alpha > 0 && this.y < screen.height && this.x > -this.w && this.x < screen.width;
      };

      this.draw = function (c) {
        c.save();
        c.beginPath();
        c.translate(this.x + this.w / 2, this.y + this.h / 2);
        c.arc(0, 0, this.w, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.globalAlpha = this.alpha;
        c.closePath();
        c.fill();
        c.restore();
      };
    }

    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();
    window.requestAnimationFrame(updateWorld);
  }