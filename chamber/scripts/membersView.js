document.addEventListener("DOMContentLoaded", () => {

    viewButton.addEventListener("click", () => {

        memberLists.forEach(memberList => {

            if (viewButton.textContent.includes("list view")) {

                memberList.classList.add("grid");

                memberList.classList.remove("list");

                viewButton.textContent = "grid view";

            } else if (viewButton.textContent.includes("grid view")) {

                memberList.classList.add("list");

                memberList.classList.remove("grid");

                viewButton.textContent = "list view";

            }

        });

    });

});

