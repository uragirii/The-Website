// This file exists for the sole purpose of sending mail
const functions = require('firebase-functions');
const nodemailer = require('nodemailer')

// Nah, I ain't saving it in JSON file with gitignore
const gmailId = functions.config().gmail.email;
const gmailPsswd = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailId,
      pass: gmailPsswd,
	},
	tls : {
		rejectUnauthorized:false
	}
  });

const getEmailConfig = (data) => {
	const mailHTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
	<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
	<meta content="width=device-width" name="viewport"/>
	<!--[if !mso]><!-->
	<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
	<!--<![endif]-->
	<style type="text/css">
			body {
				margin: 0;
				padding: 0;
			}
	
			table,
			td,
			tr {
				vertical-align: top;
				border-collapse: collapse;
			}
	
			* {
				line-height: inherit;
			}
	
			a[x-apple-data-detectors=true] {
				color: inherit !important;
				text-decoration: none !important;
			}
		</style>
	<style id="media-query" type="text/css">
			@media (max-width: 795px) {
	
				.block-grid,
				.col {
					min-width: 320px !important;
					max-width: 100% !important;
					display: block !important;
				}
	
				.block-grid {
					width: 100% !important;
				}
	
				.col {
					width: 100% !important;
				}
	
				.col>div {
					margin: 0 auto;
				}
	
				img.fullwidth,
				img.fullwidthOnMobile {
					max-width: 100% !important;
				}
	
				.no-stack .col {
					min-width: 0 !important;
					display: table-cell !important;
				}
	
				.no-stack.two-up .col {
					width: 50% !important;
				}
	
				.no-stack .col.num4 {
					width: 33% !important;
				}
	
				.no-stack .col.num8 {
					width: 66% !important;
				}
	
				.no-stack .col.num4 {
					width: 33% !important;
				}
	
				.no-stack .col.num3 {
					width: 25% !important;
				}
	
				.no-stack .col.num6 {
					width: 50% !important;
				}
	
				.no-stack .col.num9 {
					width: 75% !important;
				}
	
				.video-block {
					max-width: none !important;
				}
	
				.mobile_hide {
					min-height: 0px;
					max-height: 0px;
					max-width: 0px;
					display: none;
					overflow: hidden;
					font-size: 0px;
				}
	
				.desktop_hide {
					display: block !important;
					max-height: none !important;
				}
			}
		</style>
	</head>
	<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: transparent;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table bgcolor="transparent" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: transparent; width: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td style="word-break: break-word; vertical-align: top;" valign="top">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:transparent"><![endif]-->
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 775px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:775px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="775" style="background-color:transparent;width:775px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 775px; display: table-cell; vertical-align: top; width: 775px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
		<img align="center" alt="hey" border="0" class="center fixedwidth" src="https://firebasestorage.googleapis.com/v0/b/the-website-ak.appspot.com/o/undraw_hey_email_liaa-min.png?alt=media&token=49c773ff-76a8-4d17-9952-9ca70396a34a" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 232px; display: block;" title="hey" width="232"/>
	<!--[if mso]></td></tr></table><![endif]-->
	</div>
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 775px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:775px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="775" style="background-color:transparent;width:775px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 775px; display: table-cell; vertical-align: top; width: 775px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
	<div style="color:#0d0416;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="line-height: 1.2; font-size: 12px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #0d0416; mso-line-height-alt: 14px;">
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 14px; margin: 0;"><strong><span style="font-size: 18px;">Dear ${data['name']},</span></strong></p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 14px; margin: 0;"> </p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 14px; margin: 0;"> </p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;">Thank you for contacting me. I will get back to you soon. Here I've also included your response. If there is any error, please fill the form again <a href="https://apoorv.web.app/contact" rel="noopener" style="text-decoration: underline; color: #d50056;" target="_blank">here.</a></span></p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 14px; margin: 0;"> </p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>Name</strong> <strong>:</strong> <strong><span style="color: #d50056;">${data['name']}</span></strong></span><span style="font-size: 18px; color: #000000;"></span></p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px; color: #000000;"><strong>Message:</strong></span></p>
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 14px; margin: 0;"><strong><span style="font-size: 18px; color: #d50056;">${data['message']}</span></strong></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 775px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:775px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="775" style="background-color:transparent;width:775px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 775px; display: table-cell; vertical-align: top; width: 775px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
	<div style="color:#0d0416;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="line-height: 1.2; font-size: 12px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #0d0416; mso-line-height-alt: 14px;">
	<p style="line-height: 1.2; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;">I will get back to you within one business day. Please do not reply to this email as this is not my primary email address. You can download my Resume from <a href="https://firebasestorage.googleapis.com/v0/b/the-website-ak.appspot.com/o/Resume_Updated.pdf?alt=media&amp;token=59b3ef54-924f-4def-935b-8ccea7f391c1" rel="noopener" style="text-decoration: underline; color: #d50056;" target="_blank">here.</a></span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 775px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:775px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="775" style="background-color:transparent;width:775px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 775px; display: table-cell; vertical-align: top; width: 775px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
	<div style="color:#0d0416;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="line-height: 1.2; font-size: 12px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #0d0416; mso-line-height-alt: 14px;">
	<p style="font-size: 18px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;">Regards,</span></p>
	<p style="font-size: 14px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"> </p>
	<p style="font-size: 14px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 18px;">Apoorv Kansal</span></strong></p>
	<p style="font-size: 14px; line-height: 1.2; text-align: left; word-break: break-word; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"><a href="apoorv.web.app" rel="noopener" style="text-decoration: none; color: #d50056;" target="_blank">Website</a></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 775px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:775px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="775" style="background-color:transparent;width:775px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 775px; display: table-cell; vertical-align: top; width: 775px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
	<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;" valign="top" width="100%">
	<tbody>
	<tr style="vertical-align: top;" valign="top">
	<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
	</tr>
	</tbody>
	</table>
	</td>
	</tr>
	</tbody>
	</table>
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<div style="background-color:transparent;">
	<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 775px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
	<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
	<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:775px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
	<!--[if (mso)|(IE)]><td align="center" width="775" style="background-color:transparent;width:775px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
	<div class="col num12" style="min-width: 320px; max-width: 775px; display: table-cell; vertical-align: top; width: 775px;">
	<div style="width:100% !important;">
	<!--[if (!mso)&(!IE)]><!-->
	<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
	<!--<![endif]-->
	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Courier New', Courier, monospace"><![endif]-->
	<div style="color:#0d0416;font-family:'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
	<div style="line-height: 1.2; font-size: 12px; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; color: #0d0416; mso-line-height-alt: 14px;">
	<p style="font-size: 14px; line-height: 1.2; word-break: break-word; font-family: 'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace; mso-line-height-alt: 17px; margin: 0;"><span style="font-size: 14px;">This email was sent to you because you filled "Contact Me" form at <a href="http://apoorv.web.app/" rel="noopener" style="text-decoration: underline; color: #d50056;" target="_blank">my website</a>. If this email was sent to you by mistake, please ignore. If you do not want to receive such emails, please <a href="http://apoorv.web.app/email/Unsubscribe/${data['email']}" rel="noopener" style="text-decoration: underline; color: #d50056;" target="_blank">click here</a>.</span></p>
	</div>
	</div>
	<!--[if mso]></td></tr></table><![endif]-->
	<!--[if (!mso)&(!IE)]><!-->
	</div>
	<!--<![endif]-->
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
	</div>
	</div>
	</div>
	<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
	</td>
	</tr>
	</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
	</body>
	</html>`
	const mailOptions = {
        from: '"Apoorv Kansal" <apoorvkansal38@gmail.com>',
        to: data['email'],
        subject : "Let's Talk",
		html : mailHTML,
    }
    return mailOptions
}

const sendEmail = (data, sendToMe= false)=>{
    return new Promise((resolve, reject)=>{
        const emailConfig = getEmailConfig(data)
        if(sendToMe){
            emailConfig['to'] = "apoorvkansalak@gmail.com"
        }
        mailTransport.sendMail(emailConfig,(err, info)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(info)
            }
        })
    })
}

module.exports.sendEmail = sendEmail

