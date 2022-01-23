<template>
  <div class="profile-about">
    <h2 class="profile-about-title">
      Информация о пользователе
    </h2>
    <div class="profile-about__content">
      <div class="profile-about__main-info">
        <h4 class="profile-about__subtitle">
          Основная информация
        </h4>
        <ul class="profile-about__list">
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Пол: {{profileData.gender}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Телефон: {{profileData.phone_number}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Номер соц. страхования: {{profileData.social_insurance_number}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              День рождения: {{profileData.date_of_birth}}
            </app-skeleton-text>
          </li>
        </ul>
      </div>
      <div class="profile-about__main-info">
        <h4 class="profile-about__subtitle">
          Работа
        </h4>
        <ul class="profile-about__list">
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Должность: {{profileData.employment.title}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Ключевой навык: {{profileData.employment.key_skill}}
            </app-skeleton-text>
          </li>
        </ul>
      </div>
      <div class="profile-about__main-info">
        <h4 class="profile-about__subtitle">
          Адрес проживания
        </h4>
        <ul class="profile-about__list">
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Город: {{profileData.address.city}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Улица: {{profileData.address.street_name}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Адрес: {{profileData.address.street_address}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Почтовы индекс: {{profileData.address.zip_code}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Штат: {{profileData.address.state}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Страна: {{profileData.address.country}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Широта: {{profileData.address.coordinates.lat}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Долгота: {{profileData.address.coordinates.lng}}
            </app-skeleton-text>
          </li>
        </ul>
      </div>
      <div class="profile-about__main-info">
        <h4 class="profile-about__subtitle">
          Кредитка
        </h4>
        <ul class="profile-about__list">
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Номер: {{profileData.credit_card.cc_number}}
            </app-skeleton-text>
          </li>
        </ul>
      </div>
      <div class="profile-about__main-info">
        <h4 class="profile-about__subtitle">
          Подписка
        </h4>
        <ul class="profile-about__list">
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Тариф: {{profileData.subscription.plan}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Статус: {{profileData.subscription.status}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Способ оплаты: {{profileData.subscription.payment_method}}
            </app-skeleton-text>
          </li>
          <li class="profile-about__item">
            <app-skeleton-text :isLoading="isLoading">
              Вид договора: {{profileData.subscription.term}}
            </app-skeleton-text>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'profileData',
    'isLoading'
  ]
}
</script>
