// تفعيل ظهور العناصر عند التمرير
document.querySelectorAll('.fade-in').forEach(element => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);
});

// نسخ الأرقام والإيميل
document.querySelectorAll('.copyable').forEach(element => {
  element.addEventListener('click', () => {
    const content = element.getAttribute('data-content');
    navigator.clipboard.writeText(content).then(() => {
      const notification = document.getElementById('copy-notification');
      notification.style.opacity = 1;
      setTimeout(() => {
        notification.style.opacity = 0;
      }, 1500);
    });
  });
});
