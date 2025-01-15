// تحديد الزر والقائمة
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// إضافة حدث عند النقر على الزر
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // تفعيل أو إلغاء القائمة
});
