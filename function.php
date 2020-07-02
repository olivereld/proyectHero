<tbody class="accounts">
                    <?php
						$i = -1;
						if ($this->account_details) {
							foreach ($this->account_details as $account) {
								$i++;

								echo '<tr class="account">
									<td class="sort"></td>

									<td><input type="text" value="' . esc_attr(wp_unslash($account['app_name'])) . '" name="pagomov_app_name[' . esc_attr($i) . ']" /></td>

									<td><input type="text" id="subida'. $i .'" class="pruebasubida" value="' . esc_attr($account['url_icon']) . '" name="url_icon[' . esc_attr($i) . ']" /></td>

									<td id="color-picker-wrapper"><input id="color-picker" type="color" value="' . esc_attr($account['bg_color']) . '" name="bg_color[' . esc_attr($i) . ']" /></td>
								
									<td><input type="text" value="' . esc_attr($account['app_number']) . '" name="pagomov_app_number[' . esc_attr($i) . ']" /></td>

									<td><input type="text" value="' . esc_attr(wp_unslash($account['account_holder'])) . '" name="pagomov_account_holder[' . esc_attr($i) . ']" /></td>
									
									</tr>';
							}
						}
						?>
                </tbody>