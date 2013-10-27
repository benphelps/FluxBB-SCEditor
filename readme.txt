##
##
##        Mod title:  SCEditor WYSIWYG
##
##      Mod version:  1.0
##  Works on FluxBB:  1.5.4
##     Release date:  2013-10-27
##           Author:  Ben Phelps (bphelpsen@gmail.com)
##
##      Description:  Add a WYSIWYG editor to your forum.
##
##   Repository URL:  http://fluxbb.org/resources/mods/xxx
##
##   Affected files:  include/parser.php
##                    edit.php
##                    post.php
##                    header.php
##                    admin_options.php
##                    style/Air.css
##
##       Affects DB:  No
##
##            Notes:  Dolla Dolla Bill Yall
##
##       DISCLAIMER:  Please note that "mods" are not officially supported by
##                    FluxBB. Installation of this modification is done at
##                    your own risk. Backup your forum database and any and
##                    all applicable files before proceeding.
##
##

#
#---------[ 1. UPLOAD ]-------------------------------------------------------
#

Upload all files in files/ to your FluxBB forum root


#
#---------[ 2. OPEN ]---------------------------------------------------------
#

include/parser.php

#
#---------[ 3. FIND (line: 207) ]---------------------------------------------
#

	// List of all the tags
	$tags = array('quote', 'code', 'b', 'i', 'u', 's', 'ins', 'del', 'em', 'color', 'colour', 'url', 'email', 'img', 'list', '*', 'h', 'topic', 'post', 'forum', 'user');

#
#---------[ 4. REPLACE WITH ]-------------------------------------------------
#

	// List of all the tags
	$tags = array(‘size’, ‘font’, ‘hr’, ‘center’, ‘left’, ‘right’, 'quote', 'code', 'b', 'i', 'u', 's', 'ins', 'del', 'em', 'color', 'colour', 'url', 'email', 'img', 'list', '*', 'h', 'topic', 'post', 'forum', 'user');

#
#---------[ 5. FIND (line: 781) ]---------------------------------------------
#

	$pattern[] = '%\[h\](.*?)\[/h\]%ms';

#
#---------[ 6. AFTER, ADD ]---------------------------------------------------
#

	$pattern[] = '%\[size=([0-9])\](.*?)\[/size\]%ms';
	$pattern[] = '%\[font=(.*?)\](.*?)\[/font\]%ms';
	$pattern[] = '%\[hr\]%ms';
	$pattern[] = '%\[center\](.*?)\[/center\]%ms';
	$pattern[] = '%\[left\](.*?)\[/left\]%ms';
	$pattern[] = '%\[right\](.*?)\[/right\]%ms';

#
#---------[ 7. FIND (line: 303) ]---------------------------------------------
#

	$replace[] = '</p><h5>$1</h5><p>';

#
#---------[ 8. AFTER, ADD ]---------------------------------------------------
#

	$replace[] = '<font size="$1">$2</font>';
	$replace[] = '<font face="$1">$2</font>';
	$replace[] = '</p><hr><p>';
	$replace[] = '<div style="text-align: center">$1</div>';
	$replace[] = '<div style="text-align: left">$1</div>';
	$replace[] = '<div style="text-align: right">$1</div>';

#
#---------[ 9. OPEN ]---------------------------------------------------------
#

post.php

#
#---------[ 10. FIND (line: 638) ]---------------------------------------------
#

						<textarea name="req_message" rows="20" cols="95" tabindex="<?php echo $cur_index++ ?>"><?php echo isset($_POST['req_message']) ? pun_htmlspecialchars($orig_message) : (isset($quote) ? $quote : ''); ?></textarea><br /></label>

#
#---------[ 11. REPLACE WITH ]---------------------------------------------------
#

						<textarea class="scedit_bbcode" name="req_message" rows="20" cols="95" tabindex="<?php echo $cur_index++ ?>"><?php echo isset($_POST['req_message']) ? pun_htmlspecialchars($orig_message) : (isset($quote) ? $quote : ''); ?></textarea><br /></label>

#
#---------[ 12. FIND (line: 698) ]---------------------------------------------
#

			<p class="buttons"><input type="submit" name="submit" value="<?php echo $lang_common['Submit'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="s" /> <input type="submit" name="preview" value="<?php echo $lang_post['Preview'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="p" /> <a href="javascript:history.go(-1)"><?php echo $lang_common['Go back'] ?></a></p>

#
#---------[ 13. REPLACE WITH ]---------------------------------------------------
#

			<p class="buttons"><input type="submit" onclick="$('.scedit_bbcode').sceditor('instance').updateOriginal();" name="submit" value="<?php echo $lang_common['Submit'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="s" /> <input type="submit" onclick="$('.scedit_bbcode').sceditor('instance').updateOriginal();" name="preview" value="<?php echo $lang_post['Preview'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="p" /> <a href="javascript:history.go(-1)"><?php echo $lang_common['Go back'] ?></a></p>

#
#---------[ 14. OPEN ]---------------------------------------------------------
#

edit.php

#
#---------[ 15. FIND (line: 229) ]---------------------------------------------
#

						<textarea name="req_message" rows="20" cols="95" tabindex="<?php echo $cur_index++ ?>"><?php echo pun_htmlspecialchars(isset($_POST['req_message']) ? $message : $cur_post['message']) ?></textarea><br /></label>

#
#---------[ 16. REPLACE WITH ]---------------------------------------------------
#

						<textarea class="scedit_bbcode" name="req_message" rows="20" cols="95" tabindex="<?php echo $cur_index++ ?>"><?php echo pun_htmlspecialchars(isset($_POST['req_message']) ? $message : $cur_post['message']) ?></textarea><br /></label>

#
#---------[ 17. FIND (line: 285) ]---------------------------------------------
#

			<p class="buttons"><input type="submit" name="submit" value="<?php echo $lang_common['Submit'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="s" /> <input type="submit" name="preview" value="<?php echo $lang_post['Preview'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="p" /> <a href="javascript:history.go(-1)"><?php echo $lang_common['Go back'] ?></a></p>

#
#---------[ 18. REPLACE WITH ]---------------------------------------------------
#

			<p class="buttons"><input type="submit" onclick="$('.scedit_bbcode').sceditor('instance').updateOriginal();" name="submit" value="<?php echo $lang_common['Submit'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="s" /> <input type="submit" onclick="$('.scedit_bbcode').sceditor('instance').updateOriginal();" name="preview" value="<?php echo $lang_post['Preview'] ?>" tabindex="<?php echo $cur_index++ ?>" accesskey="p" /> <a href="javascript:history.go(-1)"><?php echo $lang_common['Go back'] ?></a></p>

#
#---------[ 19. OPEN ]---------------------------------------------------------
#

header.php

#
#---------[ 20. FIND (line: 95) ]---------------------------------------------
#

<link rel="stylesheet" type="text/css" href="style/<?php echo $pun_user['style'].'.css' ?>" />

#
#---------[ 21. AFTER, ADD ]---------------------------------------------------
#

<link rel="stylesheet" href="sceditor/themes/square.min.css" type="text/css" media="all" />
<script type="text/javascript" src="sceditor/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="sceditor/jquery.sceditor.xhtml.min.js"></script>
<script type="text/javascript" src="sceditor/jquery.sceditor.bbcode.min.js"></script>
<script type="text/javascript" src="sceditor/sceditor.js"></script>

#
#---------[ 22. OPEN ]---------------------------------------------------------
#

admin_options.php

#
#---------[ 23. FIND (line: 811) ]---------------------------------------------
#

										<textarea name="form[rules_message]" rows="10" cols="55"><?php echo pun_htmlspecialchars($pun_config['o_rules_message']) ?></textarea>

#
#---------[ 24. REPLACE WITH ]---------------------------------------------------
#

										<textarea class="scedit_html" name="form[rules_message]" rows="20" cols="100"><?php echo pun_htmlspecialchars($pun_config['o_rules_message']) ?></textarea>

#
#---------[ 25. FIND (line: 844) ]---------------------------------------------
#

										<textarea name="form[announcement_message]" rows="5" cols="55"><?php echo pun_htmlspecialchars($pun_config['o_announcement_message']) ?></textarea>

#
#---------[ 26. REPLACE WITH ]---------------------------------------------------
#

										<textarea class="scedit_html" name="form[announcement_message]" rows="20" cols="100"><?php echo pun_htmlspecialchars($pun_config['o_announcement_message']) ?></textarea>

#
#---------[ 27. FIND (line: 868) ]---------------------------------------------
#

										<textarea name="form[maintenance_message]" rows="5" cols="55"><?php echo pun_htmlspecialchars($pun_config['o_maintenance_message']) ?></textarea>

#
#---------[ 28. REPLACE WITH ]---------------------------------------------------
#

										<textarea class="scedit_html" name="form[maintenance_message]" rows="20" cols="100"><?php echo pun_htmlspecialchars($pun_config['o_maintenance_message']) ?></textarea>

#
#---------[ 29. OPEN ]---------------------------------------------------------
#

style/Air.css

#
#---------[ 30. FIND (line: 8) ]---------------------------------------------
#

html, body, .pun table, .pun div, .pun form, .pun p, .pun h1, .pun h2, .pun h3, .pun h4, .pun h5, .pun pre, .pun blockquote,
.pun ul, .pun ol, .pun li, .pun dl, .pun dt, .pun dd, .pun th, .pun td, .pun fieldset, .pun legend .pun img,
.pun abbr, .pun cite {
	border: 0;
	font-style: normal;
	font-weight: normal;
	margin: 0;
	padding: 0;
}

#
#---------[ 31. REPLACE WITH ]---------------------------------------------------
#

html, body, .pun table, .pun div, .pun form, .pun p, .pun h1, .pun h2, .pun h3, .pun h4, .pun h5, .pun pre, .pun blockquote,
.pun ul, .pun ol, .pun li, .pun dl, .pun dt, .pun dd, .pun th, .pun td, .pun fieldset, .pun legend .pun img,
.pun abbr, .pun cite {
	font-style: normal;
	font-weight: normal;
	margin: 0;
	padding: 0;
}

#
#---------[ 32. FIND (line: 1662) ]---------------------------------------------
#

.pun .inew .icon {
	border-color: #91b3d9 #87a8d1 #6c85bb #7292c3;
}

#
#---------[ 33. AFTER, ADD ]---------------------------------------------------
#

/* SCEditor WYSIWYG
----------------------------------------------------------------*/

.pun fieldset { /* This fixed the border around the forms (why isn't this default?) */
	border: 0;
}

.postmsg hr {
	border: 0;
	height: 2px;
}

#
#---------[ 34. SAVE/UPLOAD ]-------------------------------------------------
#