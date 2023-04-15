<template>
  <div class="social-networks">
    <div class="container social-networks-actions">
        <h5>Когда клиент дает согласие, мы размещаем наши реальные работы в соцсетях. Поставте нам оценку в любой из соцсетей, сделайте репост нашего любого поста и получите гарантированный ценный подарок.</h5>
    </div>

      <div class="container social-icons">
        <a href="https://instagram.com/oknadverivitebsk?igshid=ZDdkNTZiNTM=">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#b0308d" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
        </a>
        <a href="https://vk.com/id358256697">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#3c87ff" d="M15.744 13.53a5.519 5.519 0 0 0-.978-.837a7.873 7.873 0 0 0 2.859-4.471a1 1 0 1 0-1.95-.444a5.86 5.86 0 0 1-3.02 3.903V8.002a.958.958 0 0 0-.044-.216a1.024 1.024 0 0 0-.035-.171a.991.991 0 0 0-.167-.25c-.018-.02-.027-.048-.046-.068a1.001 1.001 0 0 0-.246-.167c-.026-.014-.045-.037-.072-.048a1.02 1.02 0 0 0-.236-.049a.945.945 0 0 0-.152-.031L11.003 7H11a.995.995 0 0 0-.35 1.929v4.89a11.307 11.307 0 0 1-3.01-5.984a1 1 0 1 0-1.972.334a13.334 13.334 0 0 0 5.4 8.644a.986.986 0 0 0 .128.064a.94.94 0 0 0 .108.054a.994.994 0 0 0 .35.071a.983.983 0 0 0 .424-.102c.01-.005.021-.002.031-.007a.993.993 0 0 0 .24-.176c.015-.014.024-.03.038-.045a.988.988 0 0 0 .16-.237a.952.952 0 0 0 .037-.087a.988.988 0 0 0 .07-.346v-2.126a3.551 3.551 0 0 1 1.616 1.005l1.647 1.797a1 1 0 1 0 1.474-1.352ZM15.073 1H8.937C2.78 1 1 2.778 1 8.927v6.136C1 21.22 2.778 23 8.927 23h6.136C21.22 23 23 21.222 23 15.073V8.937C23 2.78 21.222 1 15.073 1ZM21 15.073c0 5.04-.888 5.927-5.938 5.927H8.928C3.887 21 3 20.112 3 15.062V8.928C3 3.887 3.888 3 8.938 3h6.135C20.113 3 21 3.888 21 8.938Z"/></svg>
        </a>
        <a href="https://ok.ru/profile/586552292327?utm_campaign=android_share&utm_content=profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="#f96901" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M20 12c0 8 0 8-8 8s-8 0-8-8s0-8 8-8s8 0 8 8z"/><path d="M9.5 13c1.333.667 3.667.667 5 0m-5 4l2.5-3l2.5 3M12 13.5v.5"/></g></svg>

        </a>
      </div>
    <div class="line ">
    <hr style="width: 80%; color: #0b6efd">
    </div>
    <div class="call-me-now">
      <h4 style="color: crimson">Позвоните и узнайте, что мы дарим сегодня</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialNetworks"
}
</script>

<style scoped>
  .social-networks{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  .social-networks-actions{
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    color: aliceblue;
    background-color: #0b6efd;
    text-align: center;
  }
  .social-icons{
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-around;

  }
  .line{
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>