"use strict";

const addKpiDesc = (container, identifier) => {
  const html = `
    <div class="flex__container">
        <h1 class="heading__KPI">Description KPI ${identifier}</h1>
        <div class="row" data-id="${identifier}">
            <div class="desc__${identifier}"></div>
            <div class="dynamic__desc__btn__container">
                <button
                    class="delete__field element-hidden bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                    type="button"
                >
                    -
                </button>
                <button
                    class="add__field bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg"
                    type="button"
                >
                    +
                </button>
            </div>
        </div>
    </div>
`;
  container.insertAdjacentHTML("beforeend", html);
};

export { addKpiDesc };
