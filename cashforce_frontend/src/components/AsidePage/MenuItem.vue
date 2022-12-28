<template>
  <div class="container-menu-item">
    <div class="selected">
      <div class="box-selected line-selected"></div>
      <div class="box-item">
        <div class="icon-item">
          <img
            alt="Cashforce logo"
            src="@/assets/vector-aside.png"
            width="24"
            height="14"
          />
        </div>
        <div class="box-text-item">
          <p class="text-item">Notas fiscais</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-menu-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 18.46vw;
  height: 64px;
}

.selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 21px;

  width: 149px;
  height: 64px;
}

.box-selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;

  width: 4px;
  height: 84px;
}

.line-selected {
  width: 4px;
  height: 64px;
  background: #00ad8c;
  border-radius: 4px;
}

.box-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 15px;

  width: 124px;
  height: 44px;
}

.icon-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;

  width: 24px;
  height: 44px;
}

.box-text-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;

  width: 85px;
  height: 44px;
}

.text-item {
  width: 85px;
  height: 18px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #00ad8c;
}
</style>
