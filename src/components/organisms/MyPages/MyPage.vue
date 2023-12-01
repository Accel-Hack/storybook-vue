<script setup lang="ts">
import MyHeader from '../../molecules/MyHeader/MyHeader.vue';
import { useCurrentUserStore } from '../../../pinia.ts';

const currentUserStore = useCurrentUserStore();

function login() {
  currentUserStore.login({ id: 1 });
}

function logout() {
  currentUserStore.logout();
}

function signUp() {
  // TODO: 会員登録フォームに移動する
}
</script>

<template>
  <div>
    <MyHeader
      :is-logged-in="currentUserStore.isLoggedIn"
      @login="login"
      @logout="logout"
      @sign-up="signUp"
    />
    <main>
      <div class="content-wrapper">
        <div v-for="i in 10" :key="i" class="content">
          {{ $t('page.content').repeat(20) }}
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.content-wrapper {
  background-color: #fff;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 1em;
}
@media screen and (max-width: 720px) {
  .content-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (min-width: 721px) and (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
