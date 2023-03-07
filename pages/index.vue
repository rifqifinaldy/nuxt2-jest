<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="game in psfourGames" :key="game.title" xs4>
          <v-card>
            <v-img :src="game.photo" aspect-ratio="1"></v-img>
            <v-card-title primary-title>
              <div>
                <h3>{{ game.title }}</h3>
                <h4>Rating: {{ game.rating }}</h4>
                <h4>Price: ${{ game.price }}</h4>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      consoleType: 'games/games/consoleType',
    }),
    psfourGames() {
      return this.consoleType('PlayStation 4')
    },
  },
}
</script>
