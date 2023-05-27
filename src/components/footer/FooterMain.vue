<template>
<div class="footer container-fluid">
  <p class="footer-desc">Сайт не является интернет-магазином. Вся представленная информация, носит справочный характер.
    Информация нв сайте не являются публичной офертой. Цены указанные на сайте ориентировочные. Сайт не использует
    coocies и не отслеживает пользователей</p>
  <p>Copyright &#169; 2023</p>
<p class="footer-desc">Связатся с разработчмком https://www.linkedin.com/in/ivan-solonovich-2610bb124/</p>
</div>
</template>

<script>

export default {
  name: "FooterMain",
  components: {}
}
</script>

<style scoped>
.footer{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin-top: 3rem;
  background-color: crimson;
}
.footer-desc{
  font-size: 12px;
}
.contact-container{
  border: white solid 2px;
  border-radius: 5px;
  margin: 1rem;
}
</style>