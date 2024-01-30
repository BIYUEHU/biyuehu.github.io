/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2024-01-30 12:36:30
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2024-01-30 13:47:10
 */
import { sites, pages } from "./data.js";

sites.forEach((el) => {
  $("#sites").append(/* html */ `<li>
  ${el.info}：<a target="_blank" href="${el.url}">${el.text}</a>
</li>`);
});

pages.forEach((el) => {
  $("#pages").append(/* html */ `<li>
  <a target="_blank" href="${el.url}">${el.text}</a>
</li>`);
});
