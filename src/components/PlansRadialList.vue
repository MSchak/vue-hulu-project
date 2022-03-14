<template>
  <div class="plans-radial row mx-2 justify-content-center">
    <div class="plans-container d-flex">
      <div
        class="plans-card card mx-1"
        :class="{ 'highlight-card': plan == 1 }"
      >
        <div
          class="highlight pt-2 pb-2"
          :class="{ 'highlight-select': plan == 1 }"
        >
          Most Popular
        </div>
        <div class="card-body">
          <p>{{planInfo[1].name}}</p>
          <input
            type="radio"
            id="1"
            value="1"
            name="plan-choices"
            class="radio"
            v-model="plan"
          />
          <img class="check" v-if="plan == 1" src="../assets/check.png" />
        </div>
      </div>

      <div
        class="plans-card card mx-1"
        :class="{ 'highlight-card': plan == 2 }"
      >
        <div
          class="highlight pt-2 pb-2"
          :class="{ 'highlight-select': plan == 2 }"
        >
          Bundle &amp; Save
        </div>
        <div class="card-body">
          <p>{{planInfo[2].name}}</p>
          <input
            type="radio"
            id="2"
            value="2"
            name="plan-choices"
            class="radio"
            v-model="plan"
          />
          <img class="check" v-if="plan == 2" src="../assets/check.png" />
        </div>
      </div>

      <div
        class="plans-card card mx-1"
        :class="{ 'highlight-card': plan == 3 }"
      >
        <div
          class="highlight pt-2 pb-2"
          :class="{ 'highlight-select': plan == 3 }"
        >
          Bundle &amp; Save
        </div>
        <div class="card-body">
          <p>{{planInfo[3].name}}</p>
          <input
            type="radio"
            id="3"
            value="3"
            name="plan-choices"
            class="radio"
            v-model="plan"
          />
          <img class="check" v-if="plan == 3" src="../assets/check.png" />
        </div>
      </div>

      <div
        class="plans-card card mx-1"
        :class="{ 'highlight-card': plan == 4 }"
      >
        <div class="card-body">
          <p>{{planInfo[4].name}}</p>
          <input
            type="radio"
            id="4"
            value="4"
            name="plan-choices"
            class="radio"
            v-model="plan"
          />
          <img class="check" v-if="plan == 4" src="../assets/check.png" />
        </div>
      </div>

      <div
        class="plans-card card mx-1"
        :class="{ 'highlight-card': plan == 5 }"
      >
        <div class="card-body">
          <p>{{planInfo[5].name}}</p>
          <input
            type="radio"
            id="5"
            value="5"
            name="plan-choices"
            class="radio"
            v-model="plan"
          />
          <img class="check" v-if="plan == 5" src="../assets/check.png" />
        </div>
      </div>

      <div
        class="plans-card card mx-1"
        :class="{ 'highlight-card': plan == 6 }"
      >
        <div class="card-body">
          <p>{{planInfo[6].name}}</p>
          <input
            type="radio"
            id="6"
            value="6"
            name="plan-choices"
            class="radio"
            v-model="plan"
          />
          <img class="check" v-if="plan == 6" src="../assets/check.png" />
        </div>
      </div>
    </div>
  </div>

  <div class="plan-details-container d-flex justify-content-center">
    <div class="plan-details" v-if="plan == 1">
      <h3>{{planInfo[1].heading}}</h3>
      <p><strong>{{planInfo[1].p}}</strong></p>
      <p class="details-info">
        {{planInfo[1].details}}
      </p>
    </div>

    <div class="plan-details" v-if="plan == 2">
      <img
        class="bundle-logos"
        src="../assets/bndle-logos-color.png"
        alt="Bundle Logos"
      />
      <p><strong>{{planInfo[2].p}}</strong></p>
      <p class="details-info">
        {{planInfo[2].details}}
      </p>
    </div>

    <div class="plan-details" v-if="plan == 3">
      <img
        class="bundle-logos"
        src="../assets/bndle-logos-color.png"
        alt="Bundle Logos"
      />
      <p>
        <strong>{{planInfo[3].p}}</strong>
      </p>
      <p class="details-info">
        {{planInfo[3].details}}
      </p>
    </div>

    <div class="plan-details" v-if="plan == 4">
      <p>
        <strong
          >{{planInfo[4].p}}</strong
        >
      </p>
      <p class="details-info">
        {{planInfo[4].details}}
      </p>
    </div>

    <div class="plan-details" v-if="plan == 5">
      <h3>{{planInfo[5].heading}}</h3>
      <p><strong>{{planInfo[5].p}}</strong></p>
      <p class="details-info">
        {{planInfo[5].details}}
      </p>
    </div>

    <div class="plan-details" v-if="plan == 6">
      <img
        class="bundle-logos"
        src="../assets/bndle-logos-color.png"
        alt="Bundle Logos"
      />
      <p>
        <strong
          >{{planInfo[6].p}}</strong
        >
      </p>
      <p class="details-info">
        {{planInfo[6].details}}
      </p>
    </div>
  </div>

  <div class="submit row align-items-end">
    <div class="submit-btn col mb-4">
      <div><input @click="reply" type="submit" value="Select" class="select w-100" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlansRadialList",
  data() {
    return {
      plan: 0,
      planInfo: [
        {name: "null"},
        {name: "Hulu", heading:"Get Hulu 30 days free" , p:"then $6.99/month", details: "Our ad-supported plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more."},
        {name: "Hulu, Disney+, and ESPN+", p:"Get Hulu, Disney+, and ESPN+ for $13.99/month.", details:"Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (ad-supported)." },
        {name: "Hulu (No Ads), Disney+, and ESPN+", p:"Get Hulu (No Ads) Disney+, and ESPN+ for $19.99/month.", details:"Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (No Ads)." },
        {name: "Hulu + Live TV, Disney+, and ESPN+", p:"Get Hulu + Live TV, Disney+, and ESPN+ for $69.99/month.", details:"Access 75+ channels with Live TV, endless, ad-free entertainment with Disney+, live sports with ESPN+, and award-winning Hulu originals with Hulu (ad-supported)." },
        {name: "Hulu (No Ads)", heading: "Get Hulu (No Ads) 30 days free", p:"then $12.99/month", details:"Our ad-free plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more with no ad interruptions." },
        {name: "Hulu (No Ads) + Live TV, Disney+, and ESPN+", p:"Get Hulu (No Ads) + Live TV, Disney+, and ESPN+ for $75.99/month.", details:" Access 75+ channels with Live TV, endless, ad-free entertainment with Disney+, live sports with ESPN+, and award-winning Hulu originals with Hulu (No Ads)." },
      ],
    };
  },
  methods: {
    reply(){
      alert(`Thank you for signing up for the ${this.planInfo[this.plan].name} plan.`)

    },
  },
};
</script>

<style scoped>
.plans-container {
  max-width: 900px;
  overflow: scroll;
  height: 200px;
}
.plans-container::-webkit-scrollbar {
  display: none;
}
.plans-card {
  width: 140px;
  height: 175px;
  flex-shrink: 0;
  box-sizing: content-box;
}

.card {
  border: none;
  box-shadow: 0 10px 20px -5px rgb(0 0 0 / 8%);
}

.highlight-card {
  border: 2px solid #29a869;
}

.card-body {
  padding: 10px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-body p {
  font-weight: bold;
  font-family: "Graphik Medium";
  font-size: 1.125em;
}
.highlight {
  background: #dde0e6;
  border-bottom: solid 1px #dde0e6;
  color: #272c35;
  padding-top: 5px;
  font-size: 0.625em;
  text-transform: uppercase;
  font-family: "Graphik Semibold";
  letter-spacing: 1px;
}

.highlight-select {
  background-color: #29a869;
  color: white;
  padding-top: 5px;
  font-size: 0.625em;
  text-transform: uppercase;
  font-family: "Graphik Semibold";
  letter-spacing: 1px;
}
.radio {
  position: absolute;
  bottom: 10px;
  left: 0px;
}

input[type="radio"] {
  border: 0px;
  width: 100%;
  height: 2em;
}
.check {
  position: absolute;
  bottom: 10px;
  width: 32px;
}
.plan-details-container {
  height: 300px;
}

.plan-details {
  width: 50%;
  text-align: start;
}
.plan-details h3{
  font-size: .875em;
  margin-bottom: 4px;
}
.plan-details p{
  margin-bottom: 8px;
}

.details-info{
  color: #636E85;
  opacity: .85;
}
.bundle-logos {
  width: 200px;
  margin-bottom: 20px;
}
.submit {
  height: 245px;
}

.submit-btn {
  height: 25px;
}

.select {
  text-transform: uppercase;
  font-family: "Graphik Regular";
  font-size: 0.875rem;
  letter-spacing: 2px;
  background-color: #272c35;
  color: white;
  padding: 12px;
  border-radius: 6px;
}

@media (min-width: 992px) {
  .plans-radial {
    display: none;
  }

  .submit {
    display: none;
  }

  .plan-details-container{
    display: none!important;
  }

  .plan-details{
    display:none;
  }
}
</style>
