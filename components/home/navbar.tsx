"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { profileEnd } from "console";

// Definir manualmente el tipo de los proveedores si no están disponibles en la biblioteca
type Providers = Record<string, ClientSafeProvider> | null;

function ResponsiveAppBar() {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [providers, setProviders] = useState<Providers>(null);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  console.log(session);
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none", // Eliminar la sombra
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className=" md:flex mr-1">
            <Link href="/">
              <Image src="/LogoPng.png" width={90} height={90} alt="Logo" />
            </Link>
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right", // Centra los elementos horizontalmente
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "right", // Centra los elementos horizontalmente
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/blog">
                      <Typography textAlign="right">Blog</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/team">
                      <Typography textAlign="right">Directivos</Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/history">
                      <Typography textAlign="right">
                        Nuestra historia
                      </Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            </Menu>
          </Box>

          <Box
            className="text-lg font-semibold text-white"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right", // Centra los elementos horizontalmente
            }}
          >
            {!session && (
              <Link href="/blog">
                <Typography
                  className="text-lg font-semibold text-white"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Blog
                </Typography>
              </Link>
            )}
            {!session && (
              <Link href="/team">
                <Typography
                  className="text-lg font-semibold px-8 text-white"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Directivos
                </Typography>
              </Link>
            )}
            {!session && (
              <Link href="/history">
                <Typography
                  className="text-lg font-semibold text-white"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  ¿Quiénes somos?
                </Typography>
              </Link>
            )}
          </Box>
          {!session && (
            <div className=" md:block md:ml-6">
              <div className="flex items-center">
                {providers &&
                  Object.values(providers).map((provider, index) => (
                    <button
                      onClick={() => signIn(provider.id)}
                      key={index}
                      className="flex items-center text-white bg-sky-600 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    >
                      <FaGoogle className="text-white mr-2" />
                      <span>Ingresar</span>
                    </button>
                  ))}
              </div>
            </div>
          )}
          {session && (
            <div className=" md:block md:ml-6">
              <div className="flex items-center">
                <Image
                  className="h-8 w-8 rounded-full"
                  src={profileImage || ""}
                  alt="profile"
                  width={40}
                  height={40}
                />

                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="block px-4 py-2 text-sm text-gray-300"
                  role="menuitem"
                  id="user-menu-item-2"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {/* por si queremos agregar login
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
