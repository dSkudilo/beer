<template>
  <div class="profile-beer">
    <h2 class="profile-beer__title">Пиво!</h2>
    <h4 class="profile-beer__name">
      <app-skeleton-text
        :isLoading="isLoading"
        width="340px"
      >
        Выбор дня — {{beerData.name}}
      </app-skeleton-text>
    </h4>
    <div class="profile-beer__info">
      <ul class="profile-beer__list">
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Название: {{beerData.name}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Бренд: {{beerData.brand}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Тип: {{beerData.style}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Хмель: {{beerData.hop}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Дрожжи: {{beerData.yeast}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            IBU: {{beerData.ibu}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Алкоголь: {{beerData.alcohol}}
          </app-skeleton-text>
        </li>
        <li class="profile-beer__item">
          <app-skeleton-text :isLoading="isLoading">
            Градус: {{beerData.blg}}
          </app-skeleton-text>
        </li>
      </ul>
      <button
        @click="newBeerHandler"
        class="btn-blue">Я не согласен</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'beerData',
    'isLoading'
  ],
  emits: [
    'newBeerHandler'
  ],
  setup (_, { emit }) {
    const newBeerHandler = () => emit('newBeerHandler')
    return {
      newBeerHandler
    }
  }
}
</script>
