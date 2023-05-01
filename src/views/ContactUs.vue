<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            cover
            height="250"
            src="/src/assets/photos/bangalore.jpg"
          ></v-img>

          <v-card-item>
            <v-card-title>Checked Spot - Bangalore</v-card-title>

            <v-card-subtitle>
              <span class="me-1"></span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              ></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="4.9"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">4.9 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              1st floor - Next To Fame Diagnostics - RK Hegde Nagar Bangalore
            </div>

            <h3>Reach Us At </h3>
            <br />

            <h1>9606937470 </h1>
            <br />
            <h1>9606937472 </h1>
            
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            cover
            height="250"
            src="/src/assets/photos/hassan.jpg"
          ></v-img>

          <v-card-item>
            <v-card-title>Checked Spot - Hassan</v-card-title>

            <v-card-subtitle>
              <span class="me-1"></span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              ></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :model-value="4.9"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
              ></v-rating>

              <div class="text-grey ms-4">4.9 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              1st floor - Above Queens Collection, Subhash Square - Hassan
              573201
            </div>

            <h3>Reach Us At</h3>
            <br />

            <h1>9606937471</h1>
            <br />
            <h1>9606937473</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

